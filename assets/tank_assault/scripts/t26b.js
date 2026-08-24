function updateBones(context) {
    const builder = createPoseBuilder()
    if (context.hasOwner("seat6")) {
        builder.setRotation("front_chezhangta_cangmen", -90, 0, 0)
        builder.setRotation("back_chezhangta_cangmen", 90, 0, 0)
    }
    
    if (context.hasOwner("seat5")) {
        builder.setRotation("Right_cangmen", -90, 0, 0)
    }

    if (context.hasOwner("seat4")) {
        builder.setRotation("front_jiashicangmen", 67.5, 0, 0)
    }    
        
    return builder
}
