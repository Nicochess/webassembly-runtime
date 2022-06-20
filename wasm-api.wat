(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $f64_=>_f64 (func (param f64) (result f64)))
 (memory $0 0)
 (export "add" (func $assembly/index/add))
 (export "subtract" (func $assembly/index/subtract))
 (export "multiply" (func $assembly/index/multiply))
 (export "divide" (func $assembly/index/divide))
 (export "isPrime" (func $assembly/index/isPrime))
 (export "countPrimes" (func $assembly/index/countPrimes))
 (export "factorial" (func $assembly/index/factorial))
 (export "memory" (memory $0))
 (func $assembly/index/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
 (func $assembly/index/subtract (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.sub
 )
 (func $assembly/index/multiply (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.mul
 )
 (func $assembly/index/divide (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.div_s
 )
 (func $assembly/index/isPrime (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 1
  i32.le_s
  if
   i32.const 0
   return
  end
  i32.const 2
  local.set $1
  loop $for-loop|0
   local.get $0
   i32.const 2
   i32.div_s
   local.get $1
   i32.ge_s
   if
    local.get $0
    local.get $1
    i32.rem_s
    i32.eqz
    if
     i32.const 0
     return
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 1
 )
 (func $assembly/index/countPrimes (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  loop $for-loop|0
   local.get $0
   local.get $1
   i32.le_s
   if
    local.get $2
    i32.const 1
    i32.add
    local.get $2
    block $__inlined_func$assembly/index/isPrime (result i32)
     i32.const 0
     local.get $0
     i32.const 1
     i32.le_s
     br_if $__inlined_func$assembly/index/isPrime
     drop
     i32.const 2
     local.set $2
     loop $for-loop|01
      local.get $0
      i32.const 2
      i32.div_s
      local.get $2
      i32.ge_s
      if
       i32.const 0
       local.get $0
       local.get $2
       i32.rem_s
       i32.eqz
       br_if $__inlined_func$assembly/index/isPrime
       drop
       local.get $2
       i32.const 1
       i32.add
       local.set $2
       br $for-loop|01
      end
     end
     i32.const 1
    end
    select
    local.set $2
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  local.get $2
 )
 (func $assembly/index/factorial (param $0 f64) (result f64)
  local.get $0
  f64.const 1
  f64.eq
  local.get $0
  f64.const 0
  f64.eq
  i32.or
  if
   f64.const 1
   return
  end
  local.get $0
  local.get $0
  f64.const 1
  f64.sub
  call $assembly/index/factorial
  f64.mul
 )
)
