function updateBones(context) {
    const builder = createPoseBuilder()    
    if (context.hasOwner("seat4")) {
        builder.setRotation("door_driver", -90, 0, 0)
    }

    if (context.hasOwner("seat5")) {
        builder.setRotation("door_turret", 90, 0, 0)
    }    
        
    return builder
}
