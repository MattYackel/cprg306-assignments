export default function Item({ name, quantity, category }) {
  return (
    <ul className="my-1 px-2 bg-slate-700 max-w-xs">
      <li className="font-bold text-xl capitalize">{name}</li>
      <li>
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}
