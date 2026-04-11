import { Button, ButtonProps, keyframes } from "@chakra-ui/react";

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(254, 140, 0, 0.6);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(254, 140, 0, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(254, 140, 0, 0);
  }
`;

export const BtnTheme = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"blue.800"}
      size={"md"}
      borderRadius={"25px"}
      bgGradient={"linear-gradient(rgb(255, 234, 64), rgb(254, 140, 0))"}
      backgroundSize="200% 200%"
      h={"-moz-max-content"}
      transition={"0.25s cubic-bezier(0.2, 1, 0.3, 1)"}
      animation={`${pulse} 1s infinite`}
      _hover={{
        bgGradient: "linear-gradient(rgb(255, 250, 150), rgb(255, 160, 20))",
        transform: "scale(1.05)"
      }}
      {...args}
    >
      {children}
    </Button>
  );
};

export const BtnThemeSe = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"#0095D9"}
      size={"md"}
      borderRadius={"0px"}
      {...args}
      border={"2px solid"}
      h={"-moz-max-content"}
      transition={"0.25s cubic-bezier(0.2, 1, 0.3, 1)"}
      _hover={{
        bg: "#0095D9",
        textColor: "white"
      }}
    >
      {children}
    </Button>
  );
};
