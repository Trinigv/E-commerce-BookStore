// userRole === 'Admin' ? (
// 		<Box
// 			position='fixed'
// 			width='100%'
// 			backdropFilter={'auto'}
// 			backdropBlur='8px'
// 			zIndex={3}>
// 			<Flex
// 				bg={useColorModeValue('whiteAlpha.800', 'gray.700')}
// 				color={useColorModeValue('gray.600', 'white')}
// 				py={{ base: 2 }}
// 				px={{ base: 4 }}
// 				borderBottom={1}
// 				//borderStyle={'solid'}
// 				//borderColor={useColorModeValue('gray.200', 'gray.900')}
// 				align={'center'}
// 				boxShadow={useColorModeValue(
// 					'0 4px 6px rgba(160,174,192,0.6)',
// 					'0 4px 6px rgba(9,17,28,0.9'
// 				)}>
// 				<Flex
// 					flex={{ base: 1, md: 'auto' }}
// 					ml={{ base: -2 }}
// 					display={{ base: 'flex', md: 'none' }}>
// 					<IconButton
// 						onClick={onToggle}
// 						icon={
// 							isOpen ? (
// 								<CloseIcon w={3} h={3} />
// 							) : (
// 								<HamburgerIcon w={5} h={5} />
// 							)
// 						}
// 						variant={'ghost'}
// 						aria-label={'Toggle Navigation'}
// 					/>
// 				</Flex>
// 				<Flex
// 					flex={{ base: 1 }}
// 					justify={{ base: 'center', md: 'start' }}>
// 					<BuenLink to='/'>
// 						<Text
// 							textAlign={useBreakpointValue({
// 								base: 'center',
// 								md: 'left',
// 							})}
// 							color={useColorModeValue('gray.800', 'white')}>
// 							<Highlight
// 								key='1'
// 								query={'Book'}
// 								styles={{
// 									px: '1',
// 									py: '1',
// 									rounded: 'xl',
// 									bg: 'brand.pepe',
// 									color: 'white',
// 								}}>
// 								E-BookStore
// 							</Highlight>
// 						</Text>
// 					</BuenLink>

// 					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
// 						<DesktopNav />
// 					</Flex>
// 				</Flex>

// 				<Stack
// 					flex={{ base: 1, md: 0 }}
// 					justify={'flex-end'}
// 					direction={'row'}
// 					spacing={6}>
// 					<Center>
// 						<Button
// 							size={'md'}
// 							aria-label='Toggle Color Mode'
// 							onClick={toggleColorMode}
// 							_focus={{ boxShadow: 'none' }}
// 							w='fit-content'>
// 							{colorMode === 'light' ? (
// 								<BsMoonStarsFill title='Toggle to dark mode' />
// 							) : (
// 								<BsSun title='Toggle to light mode' />
// 							)}
// 						</Button>
// 						{/* <Switch size={'lg'} onChange={toggleColorMode} /> */}
// 					</Center>

// 					<Drawer />

// 					<BuenLink to='/adminDashboard'>
// 						<Button as={'a'}>Admin</Button>
// 					</BuenLink>
// 					<Signout />
// 				</Stack>
// 			</Flex>

// 			<Collapse in={isOpen} animateOpacity>
// 				<MobileNav />
// 			</Collapse>
// 		</Box>
// 	) : userRole === 'User' ? (
// 		<Box
// 			position='fixed'
// 			width='100%'
// 			zIndex={3}
// 			backdropFilter={'auto'}
// 			backdropBlur='8px'>
// 			<Flex
// 				bg={useColorModeValue('whiteAlpha.800', 'gray.700')}
// 				color={useColorModeValue('gray.600', 'white')}
// 				py={{ base: 2 }}
// 				px={{ base: 4 }}
// 				borderBottom={1}
// 				//borderStyle={'solid'}
// 				//borderColor={useColorModeValue('gray.200', 'gray.900')}
// 				align={'center'}
// 				boxShadow={useColorModeValue(
// 					'0 4px 6px rgba(160,174,192,0.6)',
// 					'0 4px 6px rgba(9,17,28,0.9'
// 				)}>
// 				<Flex
// 					flex={{ base: 1, md: 'auto' }}
// 					ml={{ base: -2 }}
// 					display={{ base: 'flex', md: 'none' }}>
// 					<IconButton
// 						onClick={onToggle}
// 						icon={
// 							isOpen ? (
// 								<CloseIcon w={3} h={3} />
// 							) : (
// 								<HamburgerIcon w={5} h={5} />
// 							)
// 						}
// 						variant={'ghost'}
// 						aria-label={'Toggle Navigation'}
// 					/>
// 				</Flex>
// 				<Flex
// 					flex={{ base: 1 }}
// 					justify={{ base: 'center', md: 'start' }}>
// 					<BuenLink to='/'>
// 						<Text
// 							textAlign={useBreakpointValue({
// 								base: 'center',
// 								md: 'left',
// 							})}
// 							color={useColorModeValue('gray.800', 'white')}>
// 							<Highlight
// 								query={'E-Book'}
// 								styles={{
// 									px: '1',
// 									py: '1',
// 									rounded: 'xl',
// 									bg: 'brand.pepe',
// 									color: 'white',
// 								}}>
// 								E-BookStore
// 							</Highlight>
// 						</Text>
// 					</BuenLink>

// 					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
// 						<DesktopNav />
// 					</Flex>
// 				</Flex>

// 				<Stack
// 					flex={{ base: 1, md: 0 }}
// 					justify={'flex-end'}
// 					direction={'row'}
// 					spacing={6}>
// 					<Center>
// 						<Button
// 							size={'md'}
// 							aria-label='Toggle Color Mode'
// 							onClick={toggleColorMode}
// 							_focus={{ boxShadow: 'none' }}
// 							w='fit-content'>
// 							{colorMode === 'light' ? (
// 								<BsMoonStarsFill title='Toggle to dark mode' />
// 							) : (
// 								<BsSun title='Toggle to light mode' />
// 							)}
// 						</Button>
// 						{/* <Switch size={'lg'} onChange={toggleColorMode} /> */}
// 					</Center>

// 					<FavouriteList widt={'10%'} dis={'none'} />

// 					<Drawer />

// 					<Menu>
// 						<MenuButton
// 							as={Button}
// 							rounded={'full'}
// 							variant={'link'}
// 							cursor={'pointer'}
// 							minW={0}>
// 							<ProfileImage tamaño='sm' />
// 						</MenuButton>
// 						<MenuList bg={useColorModeValue('white', 'gray.700')}>
// 							<MenuItem
// 								_focus={{ boxShadow: 'none' }}
// 								_hover={{
// 									bg: useColorModeValue('white', 'none'),
// 									cursor: 'default',
// 								}}>
// 								<FavouriteList widt={'100%'} />
// 							</MenuItem>

// 							<MenuItem
// 								_hover={{
// 									bg: useColorModeValue('white', 'none'),
// 									cursor: 'default',
// 								}}>
// 								<BuenLink to='/profile'>
// 									<Button
// 										as={'a'}
// 										fontSize={'md'}
// 										w={'250px'}>
// 										Profile
// 									</Button>
// 								</BuenLink>
// 							</MenuItem>

// 							<MenuItem
// 								w={'100%'}
// 								_hover={{ bg: 'none', cursor: 'default' }}>
// 								<Drawer widt={'215px'} />
// 							</MenuItem>

// 							<MenuDivider />
// 							<MenuItem
// 								_hover={{ bg: 'none', cursor: 'default' }}>
// 								<Signout wid='100%' />
// 							</MenuItem>
// 						</MenuList>
// 					</Menu>
// 				</Stack>
// 			</Flex>

// 			<Collapse in={isOpen} animateOpacity>
// 				<MobileNav />
// 			</Collapse>
// 		</Box>
// 	) :
