function updateBones(context) {
    const builder = createPoseBuilder()
    if (context.hasOwner("seat4")) {
        builder.setRotation("jiqiang_cangmen", 90, 0, 0)
    }
    
    if (context.hasOwner("seat5")) {
        builder.setRotation("jiashi_cangmen", 90, 0, 0)
    }
    
    if (context.hasOwner("seat6")) {
        builder.setRotation("front_kai", -90, 0, 0)
        builder.setRotation("back_kai", 90, 0, 0)
    }

    if (context.hasOwner("seat7")) {
        builder.setRotation("chezhang_cangmen", -180, 0, 0)
    }    
    
    return builder
}
