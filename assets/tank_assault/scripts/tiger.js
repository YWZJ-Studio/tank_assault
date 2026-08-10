function updateBones(context) {
    const builder = createPoseBuilder()
    if (context.hasOwner("seat6")) {
        builder.setRotation("chezhangcanmen_01", 0, -180, 0)
    }
    return builder
}
