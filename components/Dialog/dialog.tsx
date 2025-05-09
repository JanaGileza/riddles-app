import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import Button from "@/components/Button/button";

type CloseButtonData = {
  text: string;
  onClickCloseCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type DialogProps = {
  triggerText: string;
  title: string;
  description: string;
  onClickTriggerCallback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeButtons: Array<CloseButtonData>;
};

function Dialog({
  closeButtons,
  triggerText,
  title,
  description,
  onClickTriggerCallback,
}: DialogProps) {
  const renderedCloseButtons = closeButtons.map((closeButtonData) => (
    <RadixDialog.Close key={closeButtonData.text} asChild>
      <Button
        buttonText={closeButtonData.text}
        onClick={closeButtonData.onClickCloseCallback}
      />
    </RadixDialog.Close>
  ));

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <Button buttonText={triggerText} onClick={onClickTriggerCallback} />
      </RadixDialog.Trigger>
      <RadixDialog.Content>
        <RadixDialog.Title>{title}</RadixDialog.Title>
        <RadixDialog.Description>{description}</RadixDialog.Description>
        {renderedCloseButtons}
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
}

export default Dialog;
export type { CloseButtonData };
