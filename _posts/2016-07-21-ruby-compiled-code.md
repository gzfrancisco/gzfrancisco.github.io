---
tittle: Ruby compiled code
layout: post
date: 2016-07-21 10:00:00
category: code
lang: en

---
# How to run Ruby compiled code on Rubinius

## Step 1: Write the code
```
puts 'Hola Rbx'
```
## Step 2: Compile the file(s)

```
rbx compile script/my_script.rb -o script-compiled/my_script.rbc
```

## Step 3: Make a difference between source and compiled version
The main difference is the directory. The ``script`` directory is the source version and the ``script-compiled`` is the compiled version.
My reason to do that, is because the commands to require the code are different.

```
tree script script-compiled/
script
└── my_script.rb
script-compiled/
└── my_script.rbc
```
## Step 4: Run the compiled version
Here we took the ``script-compiled`` directory and require the compiled version of ``my_script``.

```
rbx -I $HOME/Desktop/script-compiled -e "Rubinius::CodeLoader.require_compiled 'my_script'"
```

## Step 5 (optional): Run the source version
Here we load the ``script`` directory and require as always our ``my_script`` file.

```
rbx -I $HOME/Desktop/script -e "require 'my_script'"
```

# Perks

This is the main benefit to do a compiled version of our code:

```
time rbx -I $HOME/Desktop/script -e "require 'my_script'"
Hola Rbx
        0.50 real         0.32 user         0.10 sys        

time rbx -I $HOME/Desktop/script-compiled -e "Rubinius::CodeLoader.require_compiled 'my_script'"
Hola Rbx
        0.37 real         0.30 user         0.06 sys
```
## Caveats

Please, before use this Rubinius feature in production; read the Caveats section of the post [Running Ruby with no Ruby][Rubinius post] to make sure you are aware of this future problems.

# Sources
[Running Ruby with no Ruby][Rubinius post]

[Rubinius post]: http://rubinius.com/2011/03/17/running-ruby-with-no-ruby/

[StackOverflow](http://stackoverflow.com/questions/25322391/can-i-generate-llvm-bytecode-with-rubinius-and-run-it-with-lli)