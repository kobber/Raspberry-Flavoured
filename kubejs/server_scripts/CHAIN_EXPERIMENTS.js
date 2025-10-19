const cauldronChainBlockId = "kubejs:cauldron_chains";

// The main problem with this is that it doesn't count as a chain when pushed/pulled by pistons (Quark) or pulleys (Supplementaries)
// One solution is to implement with Java instead, and add behaviour that sticks it to the cauldron

BlockEvents.placed("minecraft:chain", (event) => {
  let props = event.block.getProperties();
  if (event.block.down.hasTag("minecraft:cauldrons") && props.axis == "y") {
    props.facing = event.player.horizontalFacing.getOpposite();
    event.block.set(cauldronChainBlockId, props);
  }
});

BlockEvents.placed("minecraft:cauldron", (event) => {
  let upProps = event.block.up.getProperties();
  if (event.block.up.id == "minecraft:chain" && upProps.axis == "y") {
    upProps.facing = event.player.horizontalFacing.getOpposite();
    event.block.up.set(cauldronChainBlockId, upProps);
  }
});

BlockEvents.broken("#minecraft:cauldrons", (event) => {
  if (event.block.up.id == cauldronChainBlockId) {
    let props = event.block.getProperties();
    event.block.up.set("minecraft:chain", props);
  }
});