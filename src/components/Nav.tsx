// import navigation data
import { navigationData } from "../data";
export function Nav() {
  return (
    <nav>
      <ul className="flex gap-x-8">
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
