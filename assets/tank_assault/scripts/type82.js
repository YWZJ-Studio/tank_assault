function updateBones(context) {
    const forwardSpeed = context.getForwardSpeed()
    const deltaTime = (context.currentTimeMillis() - context.lastRenderTime()) / 1000 * 20
    const distance = deltaTime * forwardSpeed
    const wheelDiameter = 20 / 16.0
    const rot = distance / (wheelDiameter * 3.1415) * 360.0

    const previousWheelRotation = context.getFloat("wheelRotation", 0)
    const wheelRotation = (previousWheelRotation + rot) % 360
    context.setFloat("wheelRotation", wheelRotation)

    const turnAngle = context.getTurnAngle()
    const turnRotation = turnAngle * 16

    const builder = createPoseBuilder()
    builder.setRotation("Left_front_lun", -wheelRotation, -turnRotation, 0)
    builder.setRotation("Right_front_lun", -wheelRotation, -turnRotation, 0)
    builder.setRotation("Left_back_lun", -wheelRotation, 0, 0)
    builder.setRotation("Right_back_lun", -wheelRotation, 0, 0)
    builder.setRotation("fangxiangpan2", 0, 0, -turnRotation * 4)
    return builder
}
