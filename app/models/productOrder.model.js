module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      idProduct: String,
      idOrder: String,
      quantity: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const ProductOrder = mongoose.model("productOrder", schema);

  return ProductOrder;
};
