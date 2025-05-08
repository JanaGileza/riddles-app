import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import buttonStyles from "@/components/RiddleForm/RiddleButton/riddle-button.module.css";

type CloseButtonData = {
  text: string;
  onClickCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type RiddleDialogProps = {
  triggerText: string;
  title: string;
  description: string;
  onDialogOpenCallback: (open: boolean) => void;
  closeButtons: Array<CloseButtonData>;
};

function RiddleDialog({
  closeButtons,
  triggerText,
  title,
  description,
  onDialogOpenCallback,
}: RiddleDialogProps) {
  const renderedCloseButtons = closeButtons.map((closeButtonData) => (
    <Dialog.Close
      className={buttonStyles.button}
      onClick={closeButtonData.onClickCallback}
      key={closeButtonData.text}
    >
      {closeButtonData.text}
    </Dialog.Close>
  ));

  return (
    <Dialog.Root onOpenChange={onDialogOpenCallback}>
      <Dialog.Trigger className={buttonStyles.button}>
        {triggerText}
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>
        {renderedCloseButtons}
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default RiddleDialog;
export type { CloseButtonData };
