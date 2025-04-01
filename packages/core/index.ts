import components from './components';
import makeInstall from './makeInstaller';

const installer = makeInstall(components);

export * from '@md-editor/components';
export default installer;
