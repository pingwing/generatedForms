export default formSchema = [
  {
    title: "Krok 1",
    type: "object",
    required: ["name"],
    properties: {
      name: {type: "string", minLength: 3},
    }
  },
  {
    title: "Step 2",
    type: "object",
    required: ["age"],
    properties: {
      age: {type: "integer"}
    }
  }
];
