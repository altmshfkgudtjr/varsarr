import { RecoilRoot } from 'recoil';

const RecoilProvider = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
