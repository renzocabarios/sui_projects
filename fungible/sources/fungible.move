module fungible::fungible {
	use sui::coin::{Self, TreasuryCap};

	public struct MY_COIN has drop {}

	public struct FUNGIBLE has drop {}

	fun init(witness: FUNGIBLE, ctx: &mut TxContext) {
		let (treasury, metadata) = coin::create_currency(witness, 6, b"symbol", b"name", b"description", option::none(), ctx);
		transfer::public_freeze_object(metadata);
		transfer::public_transfer(treasury, ctx.sender())
	}

	public fun mint(
		treasury_cap: &mut TreasuryCap<FUNGIBLE>,
		amount: u64,
		recipient: address,
		ctx: &mut TxContext
	) {
		let coin = coin::mint(treasury_cap, amount, ctx);
		transfer::public_transfer(coin, recipient)
	}
}
