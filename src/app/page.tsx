import InputShortener from './InputShortener';
import BackgroundAnimate from './backgroundAnimate';
import { LinkResult } from './LinkResult';

export default function App() {
  return (
    <div className="container">
      <InputShortener />
      <BackgroundAnimate />
      <LinkResult />
    </div>
    );
}
