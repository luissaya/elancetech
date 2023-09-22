# MPOST C++ Library for MEI Cashflow Bill Acceptors

This is a C++ library for interfacing with MEI Cashflow Bill Acceptors, specifically designed for use with the Cash Machine hardware, such as the MEI SC Advance - Note validator. This library allows you to communicate with and control the bill acceptor for various cash management applications.

## Prerequisites

Before you can use this library, make sure you have the following prerequisites:

1. **Linux Operating System**: This library is designed to work on Linux-based operating systems. We recommend using Ubuntu, as many of the required libraries are installed by default.

2. **g++**: You need the GNU Compiler Collection (g++) installed to compile the library and sample applications. If you don't have this compiler, add it with:

   ```shell
   sudo apt-get install g++
   ```

3. **make**: The `make` utility is required to build the library and sample applications. Make sure it's installed on your system.

   ```shell
   sudo apt install make
   ```

## Getting Started

Follow these steps to get started with the MPOST C++ library:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your/repository.git
   ```

2. Navigate to the `Debug` directory within the repository:

   ```shell
   cd repository/Debug
   ```

3. Compile the library and sample applications by running the following command:

   ```shell
   make
   ```

## Usage

To use the MPOST C++ library in your own projects, include the necessary header files and link against the compiled library.

```cpp
#include <mpost.h>

int main() {
    // Your code to interact with the MEI Cashflow Bill Acceptor goes here
    return 0;
}
```

## Acknowledgments

Special thanks to the MEI Cashflow Bill Acceptors community for their support and contributions to this project.

---

Please make sure to replace `https://github.com/fpuentem/MPOST_Linux_Debian.git` with the actual URL of your GitHub repository where the MPOST C++ library resides