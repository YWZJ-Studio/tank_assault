function updateBones(context) {
    const builder = createPoseBuilder()
    if (context.hasOwner("seat6")) {
        builder.setRotation("front_chezhangta_cangmen", -90, 0, 0)
        builder.setRotation("back_chezhangta_cangmen", 90, 0, 0)
    }
    return builder
}
