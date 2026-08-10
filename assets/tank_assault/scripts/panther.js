function updateBones(context) {
    const builder = createPoseBuilder()
    if (context.hasOwner("seat6")) {
        builder.setRotation("chezhangta_cangmen", 0, -180, 0)
    }
    return builder
}
