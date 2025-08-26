import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import Button from "@/components/Button/button";

type CloseButtonData = {
  text: string;
  doesClose: boolean;
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
  const renderedCloseButtons = closeButtons.map((closeButtonData) => {
    const button = (
      <Button
        buttonText={closeButtonData.text}
        onClick={closeButtonData.onClickCloseCallback}
      />
    );

    if (closeButtonData.doesClose) {
      return (
        <RadixDialog.Close key={closeButtonData.text} asChild>
          {button}
        </RadixDialog.Close>
      );
    }

    return button;
  });

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <Button buttonText={triggerText} onClick={onClickTriggerCallback} />
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="bg-secondary opacity-75 min-w-full min-h-full absolute" />
        <div className="min-w-full h-screen absolute flex flex-col justify-center items-center">
          <RadixDialog.Content className="flex flex-col items-center justify-center w-fit px-[32px] py-[24px] rounded-[56px] gap-[32px] mx-[16px] sm:mx-0 fixed bg-primary">
            <RadixDialog.Title className="text-heading font-heading text-secondary">
              {title}
            </RadixDialog.Title>
            <RadixDialog.Description className="text-body-size font-body text-body">
              {description}
            </RadixDialog.Description>
            <div className="flex flex-row justify-around w-full">
              {renderedCloseButtons}
            </div>
          </RadixDialog.Content>
        </div>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

export default Dialog;
export type { CloseButtonData };
