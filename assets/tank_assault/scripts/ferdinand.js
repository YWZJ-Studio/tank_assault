function updateBones(context) {
    const builder = createPoseBuilder()
    if (context.hasOwner("seat7")) {
        builder.setRotation("chezhang_cangmen", -180, 0, 0)
    }
    return builder
}
