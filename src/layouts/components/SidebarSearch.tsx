"use client";

import { toSlug } from "@/ultil/toSlug";
import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const SidebarSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [checkInput, setCheckInput] = useState(false);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const str = toSlug({ input: searchQuery });
    if (str != "") {
      router.push(`/tim-kiem?keyword=${str}&page=1`);
    }
    setSearchQuery("");
  };

  useEffect(() => {
    const str = toSlug({ input: searchQuery });
    if (searchQuery != "" && str == "") {
      setCheckInput(true);
    } else {
      setCheckInput(false);
    }
  }, [searchQuery]);

  return (
    <Box pt={4} px={6}>
      <form onSubmit={onSearch}>
        <HStack columnGap={"0"}>
          <Input
            required
            value={searchQuery}
            type="Text"
            border={"1px solid #BFBFBF "}
            borderRadius={0}
            px={4}
            placeholder="Tìm kiếm..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            borderRadius={0}
            onClick={onSearch}
            bg={"blue.800"}
            color={"white"}
            _hover={{
              bg: "red.600"
            }}
          >
            Tìm kiếm
          </Button>
        </HStack>
      </form>
      {checkInput && (
        <Box
          pt={2}
          display={"flex"}
          color={"#f5222d"}
          justifyContent={"center"}
        >
          <Text>Từ khóa tìm kiếm không hợp lệ</Text>
        </Box>
      )}
    </Box>
  );
};
