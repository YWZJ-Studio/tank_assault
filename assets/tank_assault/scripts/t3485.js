function prepareBones() {
    const deltaTime = (context.currentTimeMillis() - context.lastRenderTime()) / 1000;
    const forwardSpeed = context.getForwardSpeed();
    const turnSpeed = context.getTurnSpeed();
    const trackWidth = 3.0 / 20;
    const leftTrackSpeed = (forwardSpeed + turnSpeed * trackWidth / 2) * 20;
    const rightTrackSpeed = (forwardSpeed - turnSpeed * trackWidth / 2) * 20;

    context.advanceProgress("tread_l_move", "tread_r_move", leftTrackSpeed, rightTrackSpeed, deltaTime, 0.3)
    //
    // for (let i = 1; i <= 8; i++) {
    //     context.rotateBone("wheelL" + i, -context.leftWheelDegrees(0.375), 0, 0)
    // }
    // for (let i = 10; i <= 17; i++) {
    //     context.rotateBone("wheelR" + i, -context.rightWheelDegrees(0.375), 0, 0)
    // }
    //
    context.rotateBone("paotai", 0, -context.getPartYRot("turret"), 0);
    context.rotateBone("barrel", -context.getPartXRot("turret"), 0, 0);
}
