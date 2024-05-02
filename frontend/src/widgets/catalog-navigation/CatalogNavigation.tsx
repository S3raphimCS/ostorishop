export const CatalogNavigation = () => {
  return (
    <div className="dropdown-content absolute left-0 right-0 z-[1] w-[99vw]">
      <div className="bg-black xl:menu-horizontal lg:min-w-full">
        <ul className="grid grid-flow-col gap-24 p-4">
          <li>
            <div>
              <p className="font-bold">Товары группа 1</p>
              <ul>
                <li>Товар 1</li>
                <li>Товар 2</li>
                <li>Товар 3</li>
                <li>Товар 4</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <p className="font-bold">Товары группа 2</p>
              <ul>
                <li>Товар 1</li>
                <li>Товар 2</li>
                <li>Товар 3</li>
                <li>Товар 4</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <p className="font-bold">Товары группа 3</p>
              <ul>
                <li>Товар 1</li>
                <li>Товар 2</li>
                <li>Товар 3</li>
                <li>Товар 4</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
