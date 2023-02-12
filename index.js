import { registerRootComponent } from 'expo';
import './i18n';
import App from './src/App';

console.log('Start app');
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
