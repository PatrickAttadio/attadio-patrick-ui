// import { useState } from 'react';
// import styles from './content.module.css';
// import { Button } from '@attadio-patrick-ui/button';

// export function Content() {
//   const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');

//   const codeExample = `
//     import styles from './button.module.css';

//     type ButtonProps = {
//       className?: string;
//       label?: string;
//       onClick?: () => void;
//     }

//     export function Button({ className, label, onClick }: ButtonProps) {
//       return (
//         <button className={\`\${styles.button} \${className}\`} onClick={onClick}>
//           {label}
//         </button>
//       );
//     }

//     export default Button;
//   `;

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Button</h1>
//       <div className={styles.tabs}>
//         <button
//           className={`${styles.tab} ${
//             activeTab === 'demo' ? styles.activeTab : ''
//           }`}
//           onClick={() => setActiveTab('demo')}
//         >
//           Demo
//         </button>
//         <button
//           className={`${styles.tab} ${
//             activeTab === 'code' ? styles.activeTab : ''
//           }`}
//           onClick={() => setActiveTab('code')}
//         >
//           Code
//         </button>
//       </div>
      
//       <div className={styles.tabContent}>
//         {activeTab === 'demo' ? (
//           <div className={styles.demo}>
//             <Button className={styles.primaryButton} label="Primary" onClick={() => alert('Primary Button Clicked')} />
//           </div>
//         ) : (
//           <pre className={styles.codeBlock}>
//             <code>{codeExample}</code>
//           </pre>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Content;


import { TabButton } from '@attadio-patrick-ui/button';
import styles from './content.module.css';

export function Content() {
  const codeExample = `
    import styles from './button.module.css';

    type ButtonProps = {
      className?: string;
      label?: string;
      onClick?: () => void;
    };

    export function Button({ className, label, onClick }: ButtonProps) {
      return (
        <button className={\`\${styles.button} \${className}\`} onClick={onClick}>
          {label}
        </button>
      );
    };

    export default Button;
  `;

  const tabs = [
    {
      label: 'Demo',
      content: (
        <div className={styles.demo}>
          <button className={styles.primaryButton} onClick={() => alert('Primary Button Clicked')}>
            Primary
          </button>
        </div>
      ),
    },
    {
      label: 'Code',
      content: (
        <pre className={styles.codeBlock}>
          <code>{codeExample}</code>
        </pre>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Button</h1>
      <TabButton className={styles.tabComponent} tabs={tabs} />
    </div>
  );
}

export default Content;
