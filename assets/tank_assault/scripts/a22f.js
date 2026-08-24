function updateBones(context) {
    const builder = createPoseBuilder()
    if (context.hasOwner("seat4")) {
        builder.setRotation("diver_door_front", -90, 0, 0)
        builder.setRotation("driver_door_back", 90, 0, 0)
    }
    
    if (context.hasOwner("seat5")) {
        builder.setRotation("codiver_door_front", -90, 0, 0)
        builder.setRotation("codriver_door_back", 90, 0, 0)
    }

    if (context.hasOwner("seat6")) {
        builder.setRotation("gunner_door_front", -90, 0, 0)
        builder.setRotation("gunner_door_back", 90, 0, 0)
    } 
 
    if (context.hasOwner("seat7")) {
        builder.setRotation("commander_door_right", 0, -90, 0)
        builder.setRotation("commander_door_left", 0, 90, 0)
    }       
        
    return builder
}
