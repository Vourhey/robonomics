(function() {var implementors = {};
implementors["node_cli"] = [{"text":"impl Unpin for RobonomicsFamily","synthetic":true,"types":[]},{"text":"impl Unpin for Extensions","synthetic":true,"types":[]},{"text":"impl Unpin for Cli","synthetic":true,"types":[]},{"text":"impl Unpin for RunCmd","synthetic":true,"types":[]},{"text":"impl Unpin for Subcommand","synthetic":true,"types":[]}];
implementors["node_primitives"] = [{"text":"impl Unpin for TokenSymbol","synthetic":true,"types":[]},{"text":"impl Unpin for CurrencyId","synthetic":true,"types":[]}];
implementors["node_rpc"] = [{"text":"impl&lt;C, F, P&gt; Unpin for LightDeps&lt;C, F, P&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Unpin for GrandpaDeps&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Unpin for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["node_runtime"] = [{"text":"impl Unpin for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Unpin for Version","synthetic":true,"types":[]},{"text":"impl Unpin for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Unpin for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Unpin for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for MaxLocks","synthetic":true,"types":[]},{"text":"impl Unpin for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Unpin for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Unpin for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Unpin for SessionKeys","synthetic":true,"types":[]},{"text":"impl Unpin for EpochDuration","synthetic":true,"types":[]},{"text":"impl Unpin for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Unpin for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Unpin for WeightLimit","synthetic":true,"types":[]},{"text":"impl Unpin for PointsLimit","synthetic":true,"types":[]},{"text":"impl Unpin for Runtime","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for Origin","synthetic":true,"types":[]},{"text":"impl Unpin for OriginCaller","synthetic":true,"types":[]},{"text":"impl Unpin for PalletInfo","synthetic":true,"types":[]},{"text":"impl Unpin for Call","synthetic":true,"types":[]},{"text":"impl Unpin for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Unpin for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; Unpin for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Hash: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing: Hasher + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Number: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as CallApiAt&lt;Block&gt;&gt;::StateBackend as Backend&lt;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing&gt;&gt;::Transaction: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog"] = [{"text":"impl&lt;T&gt; Unpin for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Time as Time&gt;::Moment: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_datalog_xcm"] = [{"text":"impl&lt;T&gt; Unpin for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Record: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_digital_twin"] = [{"text":"impl&lt;T&gt; Unpin for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch"] = [{"text":"impl&lt;T&gt; Unpin for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_launch_xcm"] = [{"text":"impl&lt;T&gt; Unpin for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_liability"] = [{"text":"impl Unpin for Communism","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; Unpin for OpenMarket&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, V, A, I&gt; Unpin for SignedLiability&lt;T, E, V, A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Economical&gt;::Parameter: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Technical&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for AppProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ProofSigner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for PureIPFS","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Index: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Index: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Economics as Economical&gt;::Parameter: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Parameter: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Liability as Agreement&lt;&lt;T as Config&gt;::Technics, &lt;T as Config&gt;::Economics&gt;&gt;::Proof: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Technics as Technical&gt;::Report: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_robonomics_rws"] = [{"text":"impl&lt;T&gt; Unpin for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Pallet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Lookup as StaticLookup&gt;::Source: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["parachain_runtime"] = [{"text":"impl Unpin for STAKE_HOLDERS","synthetic":true,"types":[]},{"text":"impl Unpin for SessionKeys","synthetic":true,"types":[]},{"text":"impl Unpin for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Unpin for Version","synthetic":true,"types":[]},{"text":"impl Unpin for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Unpin for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Unpin for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for MaxLocks","synthetic":true,"types":[]},{"text":"impl Unpin for DustAccount","synthetic":true,"types":[]},{"text":"impl Unpin for ExistentialDeposits","synthetic":true,"types":[]},{"text":"impl Unpin for GetNativeCurrencyId","synthetic":true,"types":[]},{"text":"impl Unpin for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Unpin for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Unpin for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Unpin for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Unpin for BasicDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for FieldDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for SubAccountDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for MaxSubAccounts","synthetic":true,"types":[]},{"text":"impl Unpin for MaxAdditionalFields","synthetic":true,"types":[]},{"text":"impl Unpin for MaxRegistrars","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Unpin for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Unpin for ProposalBond","synthetic":true,"types":[]},{"text":"impl Unpin for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Unpin for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for Burn","synthetic":true,"types":[]},{"text":"impl Unpin for DataDepositPerByte","synthetic":true,"types":[]},{"text":"impl Unpin for TreasuryModuleId","synthetic":true,"types":[]},{"text":"impl Unpin for MaximumReasonLength","synthetic":true,"types":[]},{"text":"impl Unpin for BountyUpdatePeriod","synthetic":true,"types":[]},{"text":"impl Unpin for BountyCuratorDeposit","synthetic":true,"types":[]},{"text":"impl Unpin for BountyValueMinimum","synthetic":true,"types":[]},{"text":"impl Unpin for BountyDepositBase","synthetic":true,"types":[]},{"text":"impl Unpin for BountyDepositPayoutDelay","synthetic":true,"types":[]},{"text":"impl Unpin for TipCountdown","synthetic":true,"types":[]},{"text":"impl Unpin for TipFindersFee","synthetic":true,"types":[]},{"text":"impl Unpin for TipReportDepositBase","synthetic":true,"types":[]},{"text":"impl Unpin for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Unpin for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Unpin for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Unpin for CandidacyBond","synthetic":true,"types":[]},{"text":"impl Unpin for VotingBondBase","synthetic":true,"types":[]},{"text":"impl Unpin for VotingBondFactor","synthetic":true,"types":[]},{"text":"impl Unpin for TermDuration","synthetic":true,"types":[]},{"text":"impl Unpin for DesiredMembers","synthetic":true,"types":[]},{"text":"impl Unpin for DesiredRunnersUp","synthetic":true,"types":[]},{"text":"impl Unpin for ElectionsPhragmenModuleId","synthetic":true,"types":[]},{"text":"impl Unpin for RococoLocation","synthetic":true,"types":[]},{"text":"impl Unpin for RococoNetwork","synthetic":true,"types":[]},{"text":"impl Unpin for RobonomicsNetwork","synthetic":true,"types":[]},{"text":"impl Unpin for RelayChainOrigin","synthetic":true,"types":[]},{"text":"impl Unpin for RelayChainCurrencyId","synthetic":true,"types":[]},{"text":"impl Unpin for Ancestry","synthetic":true,"types":[]},{"text":"impl Unpin for NativeOrmlTokens","synthetic":true,"types":[]},{"text":"impl Unpin for XcmConfig","synthetic":true,"types":[]},{"text":"impl Unpin for RelayToNative","synthetic":true,"types":[]},{"text":"impl Unpin for NativeToRelay","synthetic":true,"types":[]},{"text":"impl Unpin for AccountId32Convert","synthetic":true,"types":[]},{"text":"impl Unpin for TotalBandwidth","synthetic":true,"types":[]},{"text":"impl Unpin for WeightLimit","synthetic":true,"types":[]},{"text":"impl Unpin for PointsLimit","synthetic":true,"types":[]},{"text":"impl Unpin for Runtime","synthetic":true,"types":[]},{"text":"impl Unpin for Event","synthetic":true,"types":[]},{"text":"impl Unpin for Origin","synthetic":true,"types":[]},{"text":"impl Unpin for OriginCaller","synthetic":true,"types":[]},{"text":"impl Unpin for PalletInfo","synthetic":true,"types":[]},{"text":"impl Unpin for Call","synthetic":true,"types":[]},{"text":"impl Unpin for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Unpin for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; Unpin for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block as Block&gt;::Hash: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing: Hasher + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Number: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;C as CallApiAt&lt;Block&gt;&gt;::StateBackend as Backend&lt;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Hashing&gt;&gt;::Transaction: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["robonomics_cli"] = [{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for IoCmd","synthetic":true,"types":[]},{"text":"impl Unpin for SinkCmd","synthetic":true,"types":[]},{"text":"impl Unpin for SourceCmd","synthetic":true,"types":[]}];
implementors["robonomics_io"] = [{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
implementors["robonomics_protocol"] = [{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for DiscoveryMessage","synthetic":true,"types":[]},{"text":"impl Unpin for PubSub","synthetic":true,"types":[]},{"text":"impl Unpin for Message","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for RecordCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for NewRecordEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Datalog&gt;::Record: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for EreaseCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ErasedEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for DatalogStore&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for LaunchCall&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for NewLaunchEvent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as System&gt;::AccountId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Launch&gt;::Parameter: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Robonomics","synthetic":true,"types":[]}];
implementors["substrate_ros_api"] = [{"text":"impl&lt;P, Client&gt; Unpin for Author&lt;P, Client&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Client, Block&gt; Unpin for FullChain&lt;Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;BE, Client, Block&gt; Unpin for FullState&lt;BE, Client, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BE: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B, H&gt; Unpin for System&lt;B, H&gt;","synthetic":true,"types":[]}];
implementors["substrate_ros_msgs"] = [{"text":"impl Unpin for SystemHealthRes","synthetic":true,"types":[]},{"text":"impl Unpin for SystemHealthReq","synthetic":true,"types":[]},{"text":"impl Unpin for ExHash","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHashReq","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHeaderReq","synthetic":true,"types":[]},{"text":"impl Unpin for GetBestHeadRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHeaderRes","synthetic":true,"types":[]},{"text":"impl Unpin for StorageSizeRes","synthetic":true,"types":[]},{"text":"impl Unpin for StorageQueryRes","synthetic":true,"types":[]},{"text":"impl Unpin for PendingExtrinsicsReq","synthetic":true,"types":[]},{"text":"impl Unpin for StateCallRes","synthetic":true,"types":[]},{"text":"impl Unpin for BlockHash","synthetic":true,"types":[]},{"text":"impl Unpin for RawExtrinsic","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockRes","synthetic":true,"types":[]},{"text":"impl Unpin for PendingExtrinsicsRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetFinalizedHeadReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageKeysReq","synthetic":true,"types":[]},{"text":"impl Unpin for GetFinalizedHeadRes","synthetic":true,"types":[]},{"text":"impl Unpin for StorageHashReq","synthetic":true,"types":[]},{"text":"impl Unpin for SubmitExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Unpin for RemoveExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Unpin for SubmitExtrinsicRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetBestHeadReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageQueryReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageKey","synthetic":true,"types":[]},{"text":"impl Unpin for StateCallReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageSizeReq","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHashRes","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockReq","synthetic":true,"types":[]},{"text":"impl Unpin for SystemHealthInfo","synthetic":true,"types":[]},{"text":"impl Unpin for StorageHashRes","synthetic":true,"types":[]},{"text":"impl Unpin for StorageKeysRes","synthetic":true,"types":[]},{"text":"impl Unpin for RemoveExtrinsicReq","synthetic":true,"types":[]},{"text":"impl Unpin for StorageKeys","synthetic":true,"types":[]},{"text":"impl Unpin for RemoveExtrinsic","synthetic":true,"types":[]},{"text":"impl Unpin for GetBestHead","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHeader","synthetic":true,"types":[]},{"text":"impl Unpin for PendingExtrinsics","synthetic":true,"types":[]},{"text":"impl Unpin for SubmitExtrinsic","synthetic":true,"types":[]},{"text":"impl Unpin for GetFinalizedHead","synthetic":true,"types":[]},{"text":"impl Unpin for SystemHealth","synthetic":true,"types":[]},{"text":"impl Unpin for StateCall","synthetic":true,"types":[]},{"text":"impl Unpin for StorageSize","synthetic":true,"types":[]},{"text":"impl Unpin for StorageHash","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlockHash","synthetic":true,"types":[]},{"text":"impl Unpin for StorageQuery","synthetic":true,"types":[]},{"text":"impl Unpin for GetBlock","synthetic":true,"types":[]},{"text":"impl Unpin for TriggerRes","synthetic":true,"types":[]},{"text":"impl Unpin for TriggerReq","synthetic":true,"types":[]},{"text":"impl Unpin for Trigger","synthetic":true,"types":[]},{"text":"impl Unpin for String","synthetic":true,"types":[]},{"text":"impl Unpin for Time","synthetic":true,"types":[]},{"text":"impl Unpin for Bool","synthetic":true,"types":[]},{"text":"impl Unpin for UInt64","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()