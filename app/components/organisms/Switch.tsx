import * as SwitchPrimitive from "@radix-ui/react-switch";
import { styled } from "@stitches/react";

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: "unset",
  width: 42,
  height: 25,
  backgroundColor: "#161A1E",
  borderRadius: "9999px",
  position: "relative",
  boxShadow: `0 2px 10px #EFC77A`,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": { boxShadow: `0 0 0 2px #EFC77A` },
  '&[data-state="checked"]': { backgroundColor: "#EFC77A" },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: "block",
  width: 21,
  height: 21,
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: `0 2px 2px #161A1E`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': { transform: "translateX(19px)" },
});

// Exports
export const Switch = StyledSwitch;
export const SwitchThumb = StyledThumb;

// Your app...
const Flex = styled("div", { display: "flex" });
const Label = styled("label", {
  color: "black",
  fontSize: 25,
  lineHeight: 1,
  userSelect: "none",
});

export const SwitchCustom = ({
  htmlId = "s1",
  checked,
  onChecked,
}: {
  htmlId?: string;
  checked: boolean;
  onChecked: React.Dispatch<boolean>;
}) => (
  <form>
    <Flex css={{ alignItems: "center" }}>
      <Label htmlFor={htmlId} css={{ paddingRight: 15 }}>
        <span className={!checked ? "text-black" : "text-funded-50"}>
          {!checked ? "Normal" : "1-Step"}
        </span>
      </Label>
      <Switch id={htmlId} onCheckedChange={onChecked}>
        <SwitchThumb />
      </Switch>
    </Flex>
  </form>
);
