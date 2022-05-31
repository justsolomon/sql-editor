import styles from './editorWrapper.module.scss';

interface EditorWrapperProps {
  children: React.ReactNode;
}

const EditorWrapper = ({ children }: EditorWrapperProps) => {
  return <div className={styles['editor-wrapper']}>{children}</div>;
};

export default EditorWrapper;
