use std::string;
use sui::object::{Self, UID};
use sui::transfer;
use sui::tx_context::{Self, TxContext};

module hello_world::hello_world {
  public struct HelloWorldObject has key, store {
      id: UID,
      text: string::String
  }

}
