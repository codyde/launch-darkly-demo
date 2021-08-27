import { Menu, Container, Dropdown, Image } from "semantic-ui-react";
import { useFlags } from "launchdarkly-react-client-sdk";

export default function Nav() {
  const { header } = useFlags();
  console.log(header);
  return (
    // TODO: Feature flag around menu config? Sidenav vs topnav? Or maybe just menu options?
    <div>
      {header ? (
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              Launch-Demo
            </Menu.Item>
            <Menu.Item as="a">Home</Menu.Item>
            <Dropdown item simple text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      ) : (
        <div />
      )}
    </div>
  );
}
