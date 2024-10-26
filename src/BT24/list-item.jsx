import Item from "./item";

export default function ListItem() {
  return (
    <div className="py-5 gap-3 grid grid-cols-4 container mx-auto">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}
