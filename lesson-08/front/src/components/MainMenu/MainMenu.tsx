import block from "bem-cn";
import React from "react";
import { NavLink } from "react-router-dom";
import "./MainMenu.css";
import { navigation } from "./Navigation";

interface Props {}

const b = block("main-menu");

export const MainMenu: React.FC<Props> = () => {
  return (
    <nav className={b()}>
      {navigation.map(
        ({ text, path, child }) =>
          path && (
            <NavLink to={path}>{text}</NavLink>
          )
      )}
    </nav>
  );
};

/* TODO: make dropdown menu
const renderList = useCallback<(items: Navigation[], level?: number) => React.ReactNode>((
  items,
  level = 0
) => items.length ? (
  <ul className={b(`level-${level}`)}>
    {items.map(({ text, path, child = [] }) => (
      <li className={b(`item-${level}`, { 'has-child': child?.length > 0 })}>
        {path ? (
          <NavLink className={b('link')} to={path}>{text}</NavLink>
        ) : (
          <span className={b('link', { span: true })}>{text}</span>
        )}
        {renderList(child, level + 1)}
      </li>
    ))}
  </ul>
) : null, [])

return (
  <nav className={b()}>
    {renderList(navigation)}
  </nav>
) */
