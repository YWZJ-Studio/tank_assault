function updateBones(context) {
    const forwardSpeed = context.getForwardSpeed()
    const deltaTime = (context.currentTimeMillis() - context.lastRenderTime()) / 1000 * 20
    const distance = deltaTime * forwardSpeed
    const wheelDiameter = 20 / 16.0
    const rot = distance / (wheelDiameter * 3.1415) * 360.0

    const previousWheelRotation = context.getFloat("wheelRotation", 0)
    const wheelRotation = (previousWheelRotation + rot) % 360
    context.setFloat("wheelRotation", wheelRotation)

    const turnSpeed = context.getTurnSpeed()
    const turnRotation = turnSpeed * -16

    const builder = createPoseBuilder()
    builder.setRotation("zhuangxiang_01", 0, turnRotation, 0)
    builder.setRotation("front_lun", -wheelRotation, 0, 0)
    return builder;
}
