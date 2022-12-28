// export { default as HeaderBottom } from "./HeaderBottom";

import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';
function HeaderMain() {
  return (
    <div className='header-background'>
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
}

export default HeaderMain;
