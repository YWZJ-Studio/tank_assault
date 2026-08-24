function updateBones(context) {
    const builder = createPoseBuilder()
    
    if (context.hasOwner("seat4")) {
        builder.setRotation("Right_jiashicangmen", 0, 0, -90)
    }
    
    if (context.hasOwner("seat5")) {
        builder.setRotation("Left_jiashicangmen", 0, 0, 90)
    }   

    if (context.hasOwner("seat6")) {
        builder.setRotation("chezhangta_cangmen", 0, -180, 0)
    }

    return builder
}
