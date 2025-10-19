StartupEvents.registry('block', event => {
	event
    .create("cauldron_chains", "cardinal")
    .tagBlock("supplementaries:chains")
    .noItem()
    // .setLootTableJson({
    //   type: "minecraft:block",
    //   pools: [
    //     {
    //       bonus_rolls: 0.0,
    //       entries: [
    //         {
    //           type: "minecraft:item",
    //           name: "minecraft:chain",
    //         },
    //       ],
    //       rolls: 1.0,
    //     },
    //   ],
    // })
    .box(6, 8, 6, 10, 16, 10)
    .defaultCutout()
    .notSolid()
    .model("kubejs:block/cauldron_chains");
})