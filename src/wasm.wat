(module
  (table 0 anyfunc)
  (memory 1)
  (export "memory" memory)
  (export "getOutCharPtr" $func0)
  (export "getInCharPtr" $func1)
  (export "getHigh" $func2)
  (export "toStringFrom64" $func3)
  (export "fromString" $func4)
  (export "mul" $func5)
  (export "div" $func6)
  (export "udiv" $func7)
  (export "rem" $func8)
  (export "urem" $func9)
  (func $func0 (result i32)
    i32.const 16
  )
  (func $func1 (result i32)
    i32.const 272
  )
  (func $func2 (result i32)
    i32.const 0
    i32.load offset=528
  )
  (func $func3 (param $var0 i32) (param $var1 i32) (param $var2 i32) (result i32)
    (local $var3 i64) (local $var4 i32) (local $var5 i32) (local $var6 i64) (local $var7 i32) 
    block $label2 block $label0
      get_local $var1
      i64.extend_u/i32
      i64.const 32
      i64.shl
      get_local $var0
      i64.extend_s/i32
      i64.or
      tee_local $var6
      i64.eqz
      br_if $label0
      get_local $var2
      i64.extend_s/i32
      set_local $var3
      i32.const -2
      set_local $var0
      loop $label1
        get_local $var0
        i32.const 18
        i32.add
        i32.const 87
        i32.const 48
        get_local $var6
        get_local $var3
        i64.rem_s
        i32.wrap/i64
        tee_local $var1
        i32.const 9
        i32.gt_s
        select
        get_local $var1
        i32.add
        tee_local $var1
        i32.store8
        get_local $var0
        i32.const 1
        i32.add
        set_local $var0
        get_local $var6
        get_local $var3
        i64.div_s
        tee_local $var6
        i64.const 0
        i64.ne
        br_if $label1
      end $label1
      get_local $var0
      i32.const -1
      i32.eq
      br_if $label2
      get_local $var0
      i32.const 2
      i32.add
      set_local $var7
      i32.const 0
      i32.load8_u offset=16
      set_local $var2
      i32.const 0
      get_local $var1
      i32.store8 offset=16
      get_local $var0
      i32.const 17
      i32.add
      get_local $var2
      i32.store8
      block $label3
        get_local $var0
        i32.const 2
        i32.lt_u
        br_if $label3
        i32.const 2
        set_local $var1
        loop $label4
          get_local $var1
          i32.const 15
          i32.add
          tee_local $var2
          i32.load8_u
          set_local $var4
          get_local $var2
          get_local $var0
          i32.const 16
          i32.add
          tee_local $var5
          i32.load8_u
          i32.store8
          get_local $var5
          get_local $var4
          i32.store8
          get_local $var1
          get_local $var0
          i32.const -1
          i32.add
          tee_local $var0
          i32.lt_u
          set_local $var2
          get_local $var1
          i32.const 1
          i32.add
          set_local $var1
          get_local $var2
          br_if $label4
        end $label4
      end $label3
      get_local $var7
      return
    end $label0
      i32.const 0
      i32.const 48
      i32.store8 offset=16
      i32.const 1
      return
    end $label2
    i32.const 1
  )
  (func $func4 (param $var0 i32) (param $var1 i32) (result i32)
    (local $var2 i64) (local $var3 i64) 
    block $label2 block $label0
      get_local $var0
      i32.eqz
      br_if $label0
      get_local $var1
      i64.extend_u/i32
      set_local $var2
      i64.const 0
      set_local $var3
      i32.const 0
      set_local $var1
      loop $label1
        get_local $var3
        get_local $var2
        i64.mul
        get_local $var1
        i32.const 272
        i32.add
        i64.load8_s
        i64.add
        i64.const -48
        i64.add
        set_local $var3
        get_local $var0
        get_local $var1
        i32.const 1
        i32.add
        tee_local $var1
        i32.ne
        br_if $label1
        br $label2
      end $label1
    end $label0
      i64.const 0
      set_local $var3
    end $label2
    i32.const 0
    get_local $var3
    i64.const 32
    i64.shr_u
    i64.store32 offset=528
    get_local $var3
    i32.wrap/i64
  )
  (func $func5 (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64) 
    i32.const 0
    get_local $var3
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var2
    i64.extend_s/i32
    i64.or
    get_local $var1
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var0
    i64.extend_s/i32
    i64.or
    i64.mul
    tee_local $var4
    i64.const 32
    i64.shr_u
    i64.store32 offset=528
    get_local $var4
    i32.wrap/i64
  )
  (func $func6 (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64) 
    i32.const 0
    get_local $var1
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var0
    i64.extend_s/i32
    i64.or
    get_local $var3
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var2
    i64.extend_s/i32
    i64.or
    i64.div_s
    tee_local $var4
    i64.const 32
    i64.shr_u
    i64.store32 offset=528
    get_local $var4
    i32.wrap/i64
  )
  (func $func7 (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64) 
    i32.const 0
    get_local $var1
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var0
    i64.extend_s/i32
    i64.or
    get_local $var3
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var2
    i64.extend_s/i32
    i64.or
    i64.div_u
    tee_local $var4
    i64.const 32
    i64.shr_u
    i64.store32 offset=528
    get_local $var4
    i32.wrap/i64
  )
  (func $func8 (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64) 
    i32.const 0
    get_local $var1
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var0
    i64.extend_s/i32
    i64.or
    get_local $var3
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var2
    i64.extend_s/i32
    i64.or
    i64.rem_s
    tee_local $var4
    i64.const 32
    i64.shr_u
    i64.store32 offset=528
    get_local $var4
    i32.wrap/i64
  )
  (func $func9 (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (result i32)
    (local $var4 i64) 
    i32.const 0
    get_local $var1
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var0
    i64.extend_s/i32
    i64.or
    get_local $var3
    i64.extend_u/i32
    i64.const 32
    i64.shl
    get_local $var2
    i64.extend_s/i32
    i64.or
    i64.rem_u
    tee_local $var4
    i64.const 32
    i64.shr_u
    i64.store32 offset=528
    get_local $var4
    i32.wrap/i64
  )
)