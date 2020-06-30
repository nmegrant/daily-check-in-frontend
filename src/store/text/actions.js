export function storeText(text) {
  return {
    type: "NEW_TEXT",
    payload: text,
  };
}
