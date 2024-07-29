## Deployment Details
{
  "digest": "AZc9wbtTJCWvjth229i4kmEMF99YAbWfDy2TqD1J6ige",
  "transaction": {
    "data": {
      "messageVersion": "v1",
      "transaction": {
        "kind": "ProgrammableTransaction",
        "inputs": [
          {
            "type": "pure",
            "valueType": "address",
            "value": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244"
          }
        ],
        "transactions": [
          {
            "Publish": [
              "0x0000000000000000000000000000000000000000000000000000000000000001",
              "0x0000000000000000000000000000000000000000000000000000000000000002"
            ]
          },
          {
            "TransferObjects": [
              [
                {
                  "Result": 0
                }
              ],
              {
                "Input": 0
              }
            ]
          }
        ]
      },
      "sender": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244",
      "gasData": {
        "payment": [
          {
            "objectId": "0x48a89c0a616cf95f6f2f66d02ecde18f67376e4238e579b281b184f0f6f07b9d",
            "version": 83797318,
            "digest": "FBcJRrR4JfJxVYnQBVEK1NLSgVrLcD9UdtHS6ENs654U"
          }
        ],
        "owner": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244",
        "price": "1000",
        "budget": "100000000"
      }
    },
    "txSignatures": [
      "AP5PnWd4Rk8QPeAOfsNT/3GNAh+8TAOmi0pg4Ocg9zdzbPOetli68Z2KSAeskrFcwfBzV+WoKkF/VV+VkWcyIw85VuLyyrwLq+SBjRukl8HdoCtkSymHbvGOWfKXDmDVvA=="
    ]
  },
  "effects": {
    "messageVersion": "v1",
    "status": {
      "status": "success"
    },
    "executedEpoch": "445",
    "gasUsed": {
      "computationCost": "1000000",
      "storageCost": "8253600",
      "storageRebate": "978120",
      "nonRefundableStorageFee": "9880"
    },
    "modifiedAtVersions": [
      {
        "objectId": "0x48a89c0a616cf95f6f2f66d02ecde18f67376e4238e579b281b184f0f6f07b9d",
        "sequenceNumber": "83797318"
      }
    ],
    "transactionDigest": "AZc9wbtTJCWvjth229i4kmEMF99YAbWfDy2TqD1J6ige",
    "created": [
      {
        "owner": "Immutable",
        "reference": {
          "objectId": "0xd9be7c2ed8aff9d03b3f45637e63b22ff42061ef81e02ebd7a13a7891148ddc1",
          "version": 1,
          "digest": "87kj2AtdpLfkQHAx69pyMsMuQvNCrmxQ4mChpoc7QQM7"
        }
      },
      {
        "owner": {
          "AddressOwner": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244"
        },
        "reference": {
          "objectId": "0xe9541eef2d3db3f4543f15fd38b97960854de42cf076da28910bbad59f17b176",
          "version": 83797319,
          "digest": "5hK2cqu3aeuL9gGY6Lyyf8g6Xn83G9hcWGsK6jFapZxU"
        }
      }
    ],
    "mutated": [
      {
        "owner": {
          "AddressOwner": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244"
        },
        "reference": {
          "objectId": "0x48a89c0a616cf95f6f2f66d02ecde18f67376e4238e579b281b184f0f6f07b9d",
          "version": 83797319,
          "digest": "2j7eZ9woQfqXrLVrwkZESEpfrPEMdxtJB8WvYPKqpRY2"
        }
      }
    ],
    "gasObject": {
      "owner": {
        "AddressOwner": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244"
      },
      "reference": {
        "objectId": "0x48a89c0a616cf95f6f2f66d02ecde18f67376e4238e579b281b184f0f6f07b9d",
        "version": 83797319,
        "digest": "2j7eZ9woQfqXrLVrwkZESEpfrPEMdxtJB8WvYPKqpRY2"
      }
    },
    "dependencies": [
      "58LAir5DDFJ97j7M9gfgw6WCtvcSZFPBhndS4TH8Ck6M",
      "6Q4Nqox4NhicvBZpZHvcJb9mSK4x1aX5zerpajXhdtdi"
    ]
  },
  "events": [],
  "objectChanges": [
    {
      "type": "mutated",
      "sender": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244",
      "owner": {
        "AddressOwner": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244"
      },
      "objectType": "0x2::coin::Coin<0x2::sui::SUI>",
      "objectId": "0x48a89c0a616cf95f6f2f66d02ecde18f67376e4238e579b281b184f0f6f07b9d",
      "version": "83797319",
      "previousVersion": "83797318",
      "digest": "2j7eZ9woQfqXrLVrwkZESEpfrPEMdxtJB8WvYPKqpRY2"
    },
    {
      "type": "published",
      "packageId": "0xd9be7c2ed8aff9d03b3f45637e63b22ff42061ef81e02ebd7a13a7891148ddc1",
      "version": "1",
      "digest": "87kj2AtdpLfkQHAx69pyMsMuQvNCrmxQ4mChpoc7QQM7",
      "modules": [
        "todo_list"
      ]
    },
    {
      "type": "created",
      "sender": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244",
      "owner": {
        "AddressOwner": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244"
      },
      "objectType": "0x2::package::UpgradeCap",
      "objectId": "0xe9541eef2d3db3f4543f15fd38b97960854de42cf076da28910bbad59f17b176",
      "version": "83797319",
      "digest": "5hK2cqu3aeuL9gGY6Lyyf8g6Xn83G9hcWGsK6jFapZxU"
    }
  ],
  "balanceChanges": [
    {
      "owner": {
        "AddressOwner": "0xfbb2095bc94f37d1635d07608101bf44528be017016d64de512d7645910f0244"
      },
      "coinType": "0x2::sui::SUI",
      "amount": "-8275480"
    }
  ],
  "confirmedLocalExecution": true
}

