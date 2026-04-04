# Resources:
[Design Tokens] - https://www.designtokens.org/tr/2025.10/
[A11Y Colors] - https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html
[Github Primer - Design Tokens] - https://primer.style/product/primitives/
[IBM Carbon] - https://carbondesignsystem.com/elements/color/tokens/

Make sure that all of the generations are follow with the WCAG standards in both accessibility and tokens building.

# Base Tokens

Token set name: `base`

**Purpose**
- define raw, reuseable value
- No semantic or UI meaning

## Categories
- typography
  - font family (Geist)
  - font weight
  - font size
  - line height
  - letter spacing
- color (Already have)
```JSON
{
  "base": {
    "color": {
      "white": {
        "$type": "color",
        "$value": "#ffffff"
      },
      "black": {
        "$type": "color",
        "$value": "#000000"
      },
      "white-alpha": {
        "white-alpha-100": {
          "$type": "color",
          "$value": "#ffffff1a",
          "$description": "White 10%"
        },
        "white-alpha-200": {
          "$type": "color",
          "$value": "#ffffff33",
          "$description": "White 20%"
        },
        "white-alpha-300": {
          "$type": "color",
          "$value": "#ffffff4d",
          "$description": "White 30%"
        },
        "white-alpha-400": {
          "$type": "color",
          "$value": "#ffffff66",
          "$description": "White 40%"
        },
        "white-alpha-500": {
          "$type": "color",
          "$value": "#ffffff80",
          "$description": "White 50% (Medium)"
        },
        "white-alpha-600": {
          "$type": "color",
          "$value": "#ffffff99",
          "$description": "White 60%"
        },
        "white-alpha-700": {
          "$type": "color",
          "$value": "#ffffffb3",
          "$description": "White 70%"
        },
        "white-alpha-800": {
          "$type": "color",
          "$value": "#ffffffcc",
          "$description": "White 80%"
        },
        "white-alpha-900": {
          "$type": "color",
          "$value": "#ffffffe6",
          "$description": "White 90%"
        },
        "white-alpha-1000": {
          "$type": "color",
          "$value": "#ffffff00",
          "$description": "transparent"
        }
      },
      "black-alpha": {
        "black-alpha-100": {
          "$type": "color",
          "$value": "#0000001a",
          "$description": "Black 10%"
        },
        "black-alpha-200": {
          "$type": "color",
          "$value": "#00000033",
          "$description": "Black 20%"
        },
        "black-alpha-300": {
          "$type": "color",
          "$value": "#0000004d",
          "$description": "Black 30%"
        },
        "black-alpha-400": {
          "$type": "color",
          "$value": "#00000066",
          "$description": "Black 40%"
        },
        "black-alpha-500": {
          "$type": "color",
          "$value": "#00000080",
          "$description": "Black 50% (Medium)"
        },
        "black-alpha-600": {
          "$type": "color",
          "$value": "#00000099",
          "$description": "Black 60%"
        },
        "black-alpha-700": {
          "$type": "color",
          "$value": "#000000b3",
          "$description": "Black 70%"
        },
        "black-alpha-800": {
          "$type": "color",
          "$value": "#000000cc",
          "$description": "Black 80%"
        },
        "black-alpha-900": {
          "$type": "color",
          "$value": "#000000e6",
          "$description": "Black 90%"
        },
        "black-alpha-1000": {
          "$type": "color",
          "$value": "#00000000",
          "$description": "transparent"
        }
      },
      "gray": {
        "gray-100": {
          "$type": "color",
          "$value": "#f7f7f7",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.07:1 against background #ffffff"
        },
        "gray-200": {
          "$type": "color",
          "$value": "#dddddd",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.36:1 against background #ffffff"
        },
        "gray-300": {
          "$type": "color",
          "$value": "#c4c4c4",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.74:1 against background #ffffff"
        },
        "gray-400": {
          "$type": "color",
          "$value": "#ababab",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 2.3:1 against background #ffffff"
        },
        "gray-500": {
          "$type": "color",
          "$value": "#939393",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 3.07:1 against background #ffffff"
        },
        "gray-600": {
          "$type": "color",
          "$value": "#7c7c7c",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 4.17:1 against background #ffffff"
        },
        "gray-700": {
          "$type": "color",
          "$value": "#656565",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 5.83:1 against background #ffffff"
        },
        "gray-800": {
          "$type": "color",
          "$value": "#4f4f4f",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 8.19:1 against background #ffffff"
        },
        "gray-900": {
          "$type": "color",
          "$value": "#3b3b3b",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 11.2:1 against background #ffffff"
        },
        "gray-1000": {
          "$type": "color",
          "$value": "#272727",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 14.94:1 against background #ffffff"
        }
      },
      "indingo": {
        "indingo-100": {
          "$type": "color",
          "$value": "#f6f7f9",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.07:1 against background #ffffff"
        },
        "indingo-200": {
          "$type": "color",
          "$value": "#d7dde5",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.36:1 against background #ffffff"
        },
        "indingo-300": {
          "$type": "color",
          "$value": "#bcc5d2",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.74:1 against background #ffffff"
        },
        "indingo-400": {
          "$type": "color",
          "$value": "#9facbe",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 2.3:1 against background #ffffff"
        },
        "indingo-500": {
          "$type": "color",
          "$value": "#8494ab",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 3.07:1 against background #ffffff"
        },
        "indingo-600": {
          "$type": "color",
          "$value": "#6a7d99",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 4.17:1 against background #ffffff"
        },
        "indingo-700": {
          "$type": "color",
          "$value": "#506686",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 5.83:1 against background #ffffff"
        },
        "indingo-800": {
          "$type": "color",
          "$value": "#385073",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 8.19:1 against background #ffffff"
        },
        "indingo-900": {
          "$type": "color",
          "$value": "#203b62",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 11.2:1 against background #ffffff"
        },
        "indingo-1000": {
          "$type": "color",
          "$value": "#0b264c",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 14.94:1 against background #ffffff"
        }
      },
      "neutral": {
        "neutral-100": {
          "$type": "color",
          "$value": "#f7f7f8",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.07:1 against background #ffffff"
        },
        "neutral-200": {
          "$type": "color",
          "$value": "#dbdde0",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.36:1 against background #ffffff"
        },
        "neutral-300": {
          "$type": "color",
          "$value": "#c1c4c9",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.74:1 against background #ffffff"
        },
        "neutral-400": {
          "$type": "color",
          "$value": "#a6abb1",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 2.3:1 against background #ffffff"
        },
        "neutral-500": {
          "$type": "color",
          "$value": "#8e939b",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 3.07:1 against background #ffffff"
        },
        "neutral-600": {
          "$type": "color",
          "$value": "#767d86",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 4.17:1 against background #ffffff"
        },
        "neutral-700": {
          "$type": "color",
          "$value": "#5e6570",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 5.83:1 against background #ffffff"
        },
        "neutral-800": {
          "$type": "color",
          "$value": "#484f5a",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 8.19:1 against background #ffffff"
        },
        "neutral-900": {
          "$type": "color",
          "$value": "#343b46",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 11.2:1 against background #ffffff"
        },
        "neutral-1000": {
          "$type": "color",
          "$value": "#212731",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 14.94:1 against background #ffffff"
        }
      },
      "blue": {
        "blue-100": {
          "$type": "color",
          "$value": "#f4f8fe",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.07:1 against background #ffffff"
        },
        "blue-200": {
          "$type": "color",
          "$value": "#ceddf9",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.36:1 against background #ffffff"
        },
        "blue-300": {
          "$type": "color",
          "$value": "#acc5f4",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.74:1 against background #ffffff"
        },
        "blue-400": {
          "$type": "color",
          "$value": "#89abed",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 2.3:1 against background #ffffff"
        },
        "blue-500": {
          "$type": "color",
          "$value": "#6792e6",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 3.07:1 against background #ffffff"
        },
        "blue-600": {
          "$type": "color",
          "$value": "#4778de",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 4.17:1 against background #ffffff"
        },
        "blue-700": {
          "$type": "color",
          "$value": "#255cd5",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 5.83:1 against background #ffffff"
        },
        "blue-800": {
          "$type": "color",
          "$value": "#0340c7",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 8.19:1 against background #ffffff"
        },
        "blue-900": {
          "$type": "color",
          "$value": "#0025ae",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 11.2:1 against background #ffffff"
        },
        "blue-1000": {
          "$type": "color",
          "$value": "#000090",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 14.94:1 against background #ffffff"
        }
      },
      "orange": {
        "orange-100": {
          "$type": "color",
          "$value": "#fbf5f4",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.07:1 against background #ffffff"
        },
        "orange-200": {
          "$type": "color",
          "$value": "#f1d6d3",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.36:1 against background #ffffff"
        },
        "orange-300": {
          "$type": "color",
          "$value": "#e7bab5",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.74:1 against background #ffffff"
        },
        "orange-400": {
          "$type": "color",
          "$value": "#db9b93",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 2.3:1 against background #ffffff"
        },
        "orange-500": {
          "$type": "color",
          "$value": "#d17c72",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 3.07:1 against background #ffffff"
        },
        "orange-600": {
          "$type": "color",
          "$value": "#c55c50",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 4.17:1 against background #ffffff"
        },
        "orange-700": {
          "$type": "color",
          "$value": "#b83627",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 5.83:1 against background #ffffff"
        },
        "orange-800": {
          "$type": "color",
          "$value": "#9f1100",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 8.19:1 against background #ffffff"
        },
        "orange-900": {
          "$type": "color",
          "$value": "#790d00",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 11.2:1 against background #ffffff"
        },
        "orange-1000": {
          "$type": "color",
          "$value": "#520900",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 14.94:1 against background #ffffff"
        }
      },
      "green": {
        "green-100": {
          "$type": "color",
          "$value": "#f5f8f6",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.07:1 against background #ffffff"
        },
        "green-200": {
          "$type": "color",
          "$value": "#d1e1d7",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.36:1 against background #ffffff"
        },
        "green-300": {
          "$type": "color",
          "$value": "#afcbb9",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.74:1 against background #ffffff"
        },
        "green-400": {
          "$type": "color",
          "$value": "#8bb49b",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 2.3:1 against background #ffffff"
        },
        "green-500": {
          "$type": "color",
          "$value": "#6a9e7e",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 3.07:1 against background #ffffff"
        },
        "green-600": {
          "$type": "color",
          "$value": "#498961",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 4.17:1 against background #ffffff"
        },
        "green-700": {
          "$type": "color",
          "$value": "#267243",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 5.83:1 against background #ffffff"
        },
        "green-800": {
          "$type": "color",
          "$value": "#0c5c2a",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 8.19:1 against background #ffffff"
        },
        "green-900": {
          "$type": "color",
          "$value": "#09441f",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 11.2:1 against background #ffffff"
        },
        "green-1000": {
          "$type": "color",
          "$value": "#062d15",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 14.94:1 against background #ffffff"
        }
      },
      "red": {
        "red-100": {
          "$type": "color",
          "$value": "#fbf6f6",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.07:1 against background #ffffff"
        },
        "red-200": {
          "$type": "color",
          "$value": "#ecd8d8",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.36:1 against background #ffffff"
        },
        "red-300": {
          "$type": "color",
          "$value": "#dfbcbc",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 1.74:1 against background #ffffff"
        },
        "red-400": {
          "$type": "color",
          "$value": "#d19e9e",
          "$description": "Do not use for UI elements or text. WCAG 2.x (relative luminance) contrast is 2.3:1 against background #ffffff"
        },
        "red-500": {
          "$type": "color",
          "$value": "#c48181",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 3.07:1 against background #ffffff"
        },
        "red-600": {
          "$type": "color",
          "$value": "#b66565",
          "$description": "Color can be used for UI elements or large text. WCAG 2.x (relative luminance) contrast is 4.17:1 against background #ffffff"
        },
        "red-700": {
          "$type": "color",
          "$value": "#a84545",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 5.83:1 against background #ffffff"
        },
        "red-800": {
          "$type": "color",
          "$value": "#902a2a",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 8.19:1 against background #ffffff"
        },
        "red-900": {
          "$type": "color",
          "$value": "#6d1f1f",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 11.2:1 against background #ffffff"
        },
        "red-1000": {
          "$type": "color",
          "$value": "#491515",
          "$description": "Color can be used for small text. WCAG 2.x (relative luminance) contrast is 14.94:1 against background #ffffff"
        }
      }
    }
  }
}
```
- spacing
- radius
- border
- opacity
- elevation
- size

# Semantic Tokens (Separate Light/Dark set)
Token set names: `semantic-light`, `semantic-dark`

**Purpose**
- Express meaning, role, and intent
- Bridge base to real usage
- Light and dark modes are set that can switch by toggle

**Mandatory Rules**
- MUST separate into two tokens set `semantic-light` and `semantic-dark`
- MUST have identical structure/path except the value that can change for specific mode.
- MUST reference from `base` tokens set ONLY.
- MUST NOT contain any raw value.

**Naming Rules**
- Avoid component name.
- Describe what token is used for.
- Ensure consistency structure.

# Component Tokens
Token set name: `component`

**Purpose**
- Bring defined usage tokens from semantic set to use.
  
**Rules**
- MUST reference from the semantic set.
- Reference the tokens appropriately.
- Must cover all states for some components that needs e.g. button has default, hover, active, disabled.
- Ensure they're accessible.