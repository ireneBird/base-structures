module.exports = {
  verbose: true,
  preset: "ts-jest",
  roots: ["<rootDir>/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};