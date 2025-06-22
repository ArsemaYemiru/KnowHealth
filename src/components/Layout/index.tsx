import {
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/KH.png";
import { useNavigate } from "react-router";
import {
  Code2Icon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
} from "lucide-react";

export function Shell({
  children,
  noFoot,
}: {
  children: React.ReactNode;
  noFoot?: boolean;
}) {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  const navigationMenu = [
    { name: "Home", icon: null, path: "/" },
    { name: "Reviews", icon: null, path: "/reviews" },
    { name: "Support Center", icon: Code2Icon, path: "/support" },
  ].map((menu) => (
    <Button
      onClick={() => navigate(menu.path)}
      leftSection={menu.icon && <menu.icon size={16} />}
      size="sm"
      c="dark"
      variant={window.location.pathname == menu.path ? "light" : "subtle"}
    >
      {menu.name}
    </Button>
  ));

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Container
          style={{
            height: 60,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
          size="xl"
        >
          <Flex mt="xs" align="center" justify="space-between">
            <Flex gap="xs" align="center">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Center>
                <Image w={80} src={Logo} />
              </Center>
            </Flex>
            <Flex gap="sm" align="center" visibleFrom="md">
              {navigationMenu}
            </Flex>
            <Button
              onClick={() => navigate("/contact_us")}
              leftSection={<PhoneIcon size={14} />}
            >
              Contact Us
            </Button>
          </Flex>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Flex align="start" gap="sm" direction="column">
          {navigationMenu}
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Box style={{ flex: 1 }}>{children}</Box>
        {!noFoot && (
          <Box>
            <Container
              style={{
                height: 60,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              size="xl"
            >
              <Divider color="primary" mt="xs" />
              <Flex mt="xs" align="center" justify="space-between">
                <Flex gap="xs" align="center">
                  <Center>
                    <Image w={80} src={Logo} />
                  </Center>
                </Flex>
                <Box>
                  <Text size="sm" ta="center" c="dimmed">
                    © {new Date().getFullYear()} mksaddis.com – All rights
                    reserved.
                  </Text>
                </Box>
                <Flex gap="md">
                  <InstagramIcon />
                  <FacebookIcon />
                  <LinkedinIcon />
                </Flex>
              </Flex>
            </Container>
          </Box>
        )}
      </AppShell.Main>
    </AppShell>
  );
}
