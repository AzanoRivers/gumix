/**
 * Content Script Entry Point - Injects Gumix HUD into Pixels.xyz
 * @author AzanoRivers | VibeCoding with Claude Sonnet 4.5
 */
import './style.css';
import ReactDOM from 'react-dom/client';
import App from './App';

export default defineContentScript({
  matches: ['*://play.pixels.xyz/*'],
  runAt: 'document_end',
  cssInjectionMode: 'ui', // Inject CSS into Shadow DOM instead of page
  async main(ctx) {
    console.log('[Gumix HUD] Content script loaded on Pixels!');
    const ui = await createShadowRootUi(ctx, {
      name: 'gumix-hud',
      position: 'overlay',
      anchor: 'body',
      append: 'last',
      onMount: (container) => {
        // Create wrapper div for React root
        const wrapper = document.createElement('div');
        container.append(wrapper);
        // Mount React app
        const root = ReactDOM.createRoot(wrapper);
        root.render(<App />);
        console.log('[Gumix HUD] React UI mounted successfully!');
        return { root, wrapper };
      },
      onRemove: (elements) => {
        // Cleanup when UI is removed
        elements?.root.unmount();
        elements?.wrapper.remove();
        console.log('[Gumix HUD] React UI unmounted');
      },
    });
    // Mount the UI
    ui.mount();
  },
});
