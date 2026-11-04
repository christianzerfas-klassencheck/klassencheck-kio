"""Kio 2.0: reproduzierbarer, eigenständiger GLB-Charakter-STARTER.
Ausführen: blender --background --python tools/build_kio_character.py
Erzeugt: assets/kio/kio-v2.glb
Keine externen Modelle oder Texturen; Blender erforderlich.
Das Modell ist ein erster riggbarer Produktions-Prototyp, kein finales AAA-Asset.
"""
import bpy, math, os
from mathutils import Vector
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

def material(name, rgb, roughness=.7):
    m=bpy.data.materials.new(name);m.diffuse_color=(*rgb,1)
    m.use_nodes=True
    bs=m.node_tree.nodes.get("Principled BSDF")
    bs.inputs["Base Color"].default_value=(*rgb,1)
    bs.inputs["Roughness"].default_value=roughness
    return m
skin=material("Kio warm skin",(.58,.34,.24))
hair=material("Kio dark chestnut",(.095,.058,.044))
navy=material("Kio midnight jacket",(.028,.095,.19))
blue=material("Kio ocean blue",(.055,.21,.38))
gold=material("Kio copper trim",(.72,.43,.16),.36)
black=material("Kio dark shoes",(.023,.032,.045))
white=material("Eye whites",(.85,.88,.84))
iris=material("Iris teal",(.05,.22,.25))

def ellipsoid(name,loc,scale,mat,segments=24,rings=16):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=segments,ring_count=rings,location=loc)
    o=bpy.context.object;o.name=name
    o.scale=scale
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    o.data.materials.append(mat)
    for p in o.data.polygons:p.use_smooth=True
    return o
def capsule(name,start,end,radius,mat):
    midpoint=(Vector(start)+Vector(end))*.5
    delta=Vector(end)-Vector(start)
    o=ellipsoid(name,midpoint,(radius,radius,delta.length*.56),mat)
    o.rotation_euler=delta.to_track_quat('Z','Y').to_euler()
    return o

parts=[]
def add(o,bone):
    parts.append((o,bone));return o
add(ellipsoid("Torso jacket",(0,0,1.55),(.43,.24,.58),navy),"spine")
add(ellipsoid("Hood collar",(0,.04,1.94),(.37,.26,.18),blue),"spine")
add(ellipsoid("Hips",(0,0,1.08),(.32,.22,.22),black),"hips")
add(ellipsoid("Head",(0,-.015,2.22),(.305,.255,.37),skin),"head")
add(ellipsoid("Hair cap",(0,-.055,2.49),(.32,.27,.16),hair),"head")
for x,y,z,s in [(-.19,-.11,2.57,.13),(-.04,-.17,2.61,.14),(.12,-.12,2.60,.15),(.23,-.07,2.52,.11)]:
    add(ellipsoid("Styled hair tuft",(x,y,z),(s,s*.7,s*.85),hair),"head")
for sign in (-1,1):
    x=sign*.132
    add(ellipsoid("Eye white",(x,-.251,2.27),(.081,.038,.052),white),"head")
    add(ellipsoid("Iris",(x,-.289,2.27),(.036,.014,.037),iris),"head")
    add(ellipsoid("Brow",(x,-.257,2.36),(.105,.025,.026),hair),"head")
    add(ellipsoid("Ear",(sign*.304,0,2.22),(.055,.06,.093),skin),"head")
add(ellipsoid("Nose",(0,-.267,2.17),(.05,.062,.078),skin),"head")
add(ellipsoid("Mouth",(0,-.249,2.065),(.09,.013,.017),hair),"head")
for sign,label in [(-1,"L"),(1,"R")]:
    add(capsule("UpperArm."+label,(sign*.43,0,1.88),(sign*.58,-.02,1.43),.145,blue),"upper_arm."+label)
    add(capsule("ForeArm."+label,(sign*.58,-.02,1.43),(sign*.54,-.14,1.07),.115,navy),"forearm."+label)
    add(ellipsoid("Hand."+label,(sign*.54,-.14,1.04),(.105,.07,.15),skin),"hand."+label)
    add(capsule("Thigh."+label,(sign*.18,0,1.04),(sign*.19,0,.56),.19,black),"thigh."+label)
    add(capsule("Shin."+label,(sign*.19,0,.56),(sign*.2,-.01,.16),.135,blue),"shin."+label)
    add(ellipsoid("Shoe."+label,(sign*.2,-.11,.095),(.17,.28,.11),black),"foot."+label)
add(ellipsoid("Chest emblem",(0,-.247,1.64),(.10,.025,.11),gold),"spine")

bpy.ops.object.armature_add(enter_editmode=True,location=(0,0,0))
rig=bpy.context.object;rig.name="Kio_Rig"
rig.data.edit_bones.remove(rig.data.edit_bones[0])
def bone(name,head,tail,parent=None):
    b=rig.data.edit_bones.new(name);b.head=head;b.tail=tail
    if parent:b.parent=rig.data.edit_bones[parent]
bone("hips",(0,0,1.02),(0,0,1.25))
bone("spine",(0,0,1.25),(0,0,1.99),"hips")
bone("head",(0,0,1.99),(0,0,2.55),"spine")
for sign,label in [(-1,"L"),(1,"R")]:
    bone("upper_arm."+label,(sign*.4,0,1.9),(sign*.58,0,1.43),"spine")
    bone("forearm."+label,(sign*.58,0,1.43),(sign*.54,-.14,1.07),"upper_arm."+label)
    bone("hand."+label,(sign*.54,-.14,1.07),(sign*.54,-.14,.92),"forearm."+label)
    bone("thigh."+label,(sign*.18,0,1.08),(sign*.19,0,.56),"hips")
    bone("shin."+label,(sign*.19,0,.56),(sign*.2,0,.16),"thigh."+label)
    bone("foot."+label,(sign*.2,0,.16),(sign*.2,-.2,.09),"shin."+label)
bpy.ops.object.mode_set(mode="OBJECT")
for obj,bone_name in parts:
    obj.parent=rig
    modifier=obj.modifiers.new("Kio armature","ARMATURE")
    modifier.object=rig
    vg=obj.vertex_groups.new(name=bone_name)
    vg.add(list(range(len(obj.data.vertices))),1.0,"REPLACE")

# Export a single rigged GLB. Blender armature animation can be added later.
os.makedirs("assets/kio",exist_ok=True)
bpy.ops.object.select_all(action="DESELECT")
rig.select_set(True)
for obj,_ in parts:obj.select_set(True)
bpy.context.view_layer.objects.active=rig
bpy.ops.export_scene.gltf(filepath=os.path.abspath("assets/kio/kio-v2.glb"),export_format="GLB",use_selection=True,export_skins=True,export_animations=True)
print("Kio 2.0 GLB generated")
