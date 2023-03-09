// Import libraries
import React, { FC } from "react"
import {
  Box,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  FlexProps,
} from "@chakra-ui/react"
// Components
import ButtonLink from "../ButtonLink"
import Card from "../Card"
import Link from "../Link"

interface IProps extends FlexProps {}
const ShanghaiCapella: FC<IProps> = (props) => {
  return (
    <Flex
      gap={6}
      direction={{ base: "column", md: "row" }}
      position="relative"
      {...props}
    >
      <Card
        title="Shanghai"
        emoji="📜"
        children={
          <>
            <Text>
              Withdrawal functionality will be enabled in the upcoming Shanghai
              upgrade planned for Q1/Q2 2023 (as with any upgrade, timing
              subject to change). This enables previously staked ETH to be
              deposited into execution layer accounts, closing the loop on
              staking liquidity, and taking one more step on Ethereum’s journey
              towards building a sustainable, scalable, secure decentralized
              ecosystem.
            </Text>
            <Text>
              Shanghai marks the end of an undefined lock-up period for ETH
              staking. Users will be free to:
            </Text>
            <UnorderedList mb={0}>
              <ListItem>Stake their ETH</ListItem>
              <ListItem>
                Earn ETH rewards that will be distributed automatically
              </ListItem>
              <ListItem>
                Un-stake their ETH to regain full access to their entire balance
              </ListItem>
              <ListItem>
                And of course, re-stake to sign back up and start earning more
                rewards
              </ListItem>
            </UnorderedList>
          </>
        }
        flex={5}
      />
      <Card
        title="Capella"
        emoji="⛓️"
        children={
          <>
            <Text>
              For the Shanghai upgrade to take effect, a simultaneous upgrade to
              the Beacon Chain must take place named Capella. Node operating
              stakers should stay tuned to client communication channels to be
              alerted of upcoming client updates planned for Q1/Q2 2023.
            </Text>
            <Text>
              Stakers who need to update their validator withdrawal keys can
              broadcast this message once the Capella upgrade has taken place.
            </Text>
            <Text>
              <Link href="https://blog.ethereum.org/category/protocol/#subscribe">
                Subscribe to the EF Blog
              </Link>{" "}
              to receive email notifications for the latest protocol
              announcements.
            </Text>
            <ButtonLink
              to="https://goerli.launchpad.ethereum.org/withdrawals"
              mt="auto"
              hideArrow
              whiteSpace="normal"
              textAlign="center"
              h="fit-content"
              py={3}
            >
              Test your setup on Goerli launchpad
            </ButtonLink>
          </>
        }
        flex={3}
      />
      {/* Decorative connector line */}
      <Box
        w={{ base: 0, md: "full" }}
        h={{ base: "full", md: 0 }}
        position="absolute"
        inset={{ base: "0 50% auto auto", md: "50% 0 auto auto" }}
        border="1px"
        borderColor="lightBorder"
        zIndex={-1}
      />
    </Flex>
  )
}

export default ShanghaiCapella
