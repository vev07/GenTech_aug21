db.reactions.aggregate([
    { $sample: { size: 1 } }
]);
