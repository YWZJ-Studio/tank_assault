function updateBones(context) {
    const builder = createPoseBuilder()
    
    if (context.hasOwner("seat4")) {
        builder.setRotation("jiqiangcangmen", 0, 0, -90)
    }
    
    if (context.hasOwner("seat5")) {
        builder.setRotation("jiashicangmen", 0, 0, 90)
    }
    
    if (context.hasOwner("seat6")) {
        builder.setRotation("left_men_01", -90, 0, 0)
    }

    if (context.hasOwner("seat7")) {
        builder.setRotation("chezhangcanmen_01", 0, -180, 0)
    }

    return builder
}