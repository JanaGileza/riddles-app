import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import Button from "@/components/Button/button";
import { PropsWithChildren } from "react";

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
} & PropsWithChildren;

function Dialog({
  closeButtons,
  triggerText,
  title,
  description,
  onClickTriggerCallback,
  children,
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
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="bg-secondary opacity-75 min-w-full min-h-full absolute" />
        <div className="min-w-full h-screen absolute flex flex-col justify-center items-center">
          <RadixDialog.Content className="flex flex-col items-center justify-center w-fit px-[32px] py-[24px] rounded-[56px] gap-[32px] mx-[16px] sm:mx-0 fixed bg-primary-light">
            <RadixDialog.Title className="text-heading font-heading text-secondary">
              {title}
            </RadixDialog.Title>
            <RadixDialog.Description className="text-body-size font-body text-body">
              {description}
            </RadixDialog.Description>
            {children}
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
