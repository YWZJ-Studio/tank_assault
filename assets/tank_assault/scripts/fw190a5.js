function updateBones(context) {
    const pitchInput = context.getPitchInput()
    const yawInput = context.getYawInput()
    const rollInput = context.getRollInput()

    const previousPropellerRotation = context.getFloat("propellerRotation", 0);
    const propellerRotation = (previousPropellerRotation + context.getPower() / 5) % 360;
    context.setFloat("propellerRotation", propellerRotation)

    const builder = createPoseBuilder();
    // 螺旋桨
    builder.setRotation("luoxuanjiang", 0, 0, -propellerRotation);
    // 舵面
    builder.setRotation("Left_back_yi", pitchInput * 16, 0, 0);
    builder.setRotation("Right_back_yi", pitchInput * 16, 0, 0);
    builder.setRotation("back_yi", 0, -yawInput * 16, 0);
    builder.setRotation("Left_fuyi", rollInput * 16, 0, 0);
    builder.setRotation("Right_fuyi", -rollInput * 16, 0, 0);
    // 尾轮
    if (!context.isPartOn("landing_gear")) {
        builder.setRotation("back_qiluojia_y6", 0, -yawInput * 16, 0);
    }
    // 操控杆
    builder.setRotation("yaogan", -8 * pitchInput, 0, -8 * rollInput)
    return builder;
}
